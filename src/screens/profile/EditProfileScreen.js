import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Header, Container, CommonFooter } from '../../components/elements';
import { ProfileForm } from '../../components/profile';
import * as apis from '../../apis/profile';
import useAsyncFetch from '../../hooks/useAsyncFetch';

export default function ProfileScreen() {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      job_position: '',
      expertises: [],
      summary: '',
    },
    onSubmit: async (values) => {
      try {
        formik.setSubmitting(true);
        await apis.editMyProfile(values);
      } catch (err) {
        console.log('err', err);
      } finally {
        // do nothing
        formik.setSubmitting(false);
      }
    },
  });
  const [myProfile, setMyProfile] = useState(undefined);

  const initialLoad = () => Promise.all([apis.getMyProfile()]);
  const [fState] = useAsyncFetch(initialLoad, (rsp) => setMyProfile(rsp));

  return (
    <>
      <Header title="Edit Profile" />
      <Container state={fState}>
        <ProfileForm myProfile={myProfile} formik={formik} />
      </Container>
      <CommonFooter />
    </>
  );
}
