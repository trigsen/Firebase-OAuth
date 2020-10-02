import { RequestServiceInterface } from '@/utils/api/request-service/types';
import PopUpService from '@/utils/helpers/PopUpService';

class RequestService implements RequestServiceInterface {
  private static instance: RequestService;

  // eslint-disable-next-line
  private constructor() {}

  static getInstance() {
    if (RequestService.instance) {
      return RequestService.instance;
    }

    RequestService.instance = new RequestService();
    return RequestService.instance;
  }

  /**
   *
   * @param URL
   * @param headers
   *
   * @returns Object with "value" property.
   */
  // eslint-disable-next-line class-methods-use-this
  async post(URL: string, body: object, options: object = {}) {
    let value = {};
    const headers = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...options,
    };

    try {
      const response = await fetch(URL, headers);
      this.handleStatus(response.status);
      value = await response.json();
    } catch (error) {
      throw new Error(error.message);
    }

    return {
      value,
    };
  }

  /**
   *
   * @param URL
   *
   * @returns Object with "value" property.
   */
  // eslint-disable-next-line class-methods-use-this
  async get(URL: string) {
    let value;
    try {
      const response = await fetch(URL);
      value = await response.json();
    } catch (error) {
      throw new Error(error.message);
    }

    return {
      value,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  private handleStatus(status: number) {
    switch (status) {
      case 400:
        PopUpService.showPopUp(
          'danger',
          'Something goes wrong. Please, retry.',
        );
        throw new Error('400 status');
      case 200:
        PopUpService.showPopUp('success', 'Success action');
        break;
      default:
        return null;
    }

    return null;
  }
}

export default RequestService;
