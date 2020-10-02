class PopUpService {
  private static show: (type: 'danger' | 'success', content: string) => void;

  static setPopUpShow(
    fn: (type: 'danger' | 'success', content: string) => void,
  ) {
    PopUpService.show = fn;
  }

  static showPopUp(type: 'danger' | 'success', content: string) {
    PopUpService.show(type, content);
  }
}

export default PopUpService;
