import React from 'react';

import { Header, Container, CommonFooter } from '../components/elements';
import { ProfileForm } from '../components/profile';

export default function ProfileScreen() {
  return (
    <>
      <Header title="Edit Profile" />
      <ProfileForm />
      <CommonFooter />
    </>
  );
}
