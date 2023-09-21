import Header from "@/components/Header";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";
import mock from "@/mock/users";

const UserView = () => {
  const router = useRouter();
  const mocks = mock(); // เอาออก

  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);
  //   if (isLoading || !fetchedUser) {
  //     return (
  //       <div className="flex justify-center items-center h-[100vh]">
  //         <ClipLoader color="lightblue" size={80} />
  //       </div>
  //     );
  //   }
  return (
    <>
      <Header
        showBackArrow
        label={fetchedUser?.name || mocks[parseInt(userId as string) - 1]?.name}
      />
      <UserHero userId={userId as string} />
    </>
  );
};

export default UserView;
