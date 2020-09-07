import React from 'react';
import PrimaryButton from '@/components/controls/PrimaryButton/PrimaryButton';
import { useDispatch } from 'react-redux';
import { userSignout } from '@/action';
import { LandingWrapper } from './styles';

function Landing() {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(userSignout());
  };

  return (
    <LandingWrapper>
        <PrimaryButton onClick={signOut}>Sign out</PrimaryButton>
    </LandingWrapper>
  );
}

export default Landing;
