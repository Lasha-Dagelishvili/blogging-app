import { userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account/index";
import { FillProfileInPayload } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

const ProfileView = () => {
  const user = useAtomValue(userAtom);

  const [profilePayload, setProfilePayload] = useState<FillProfileInPayload>({
    avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    username: "",
  });

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => console.log(res));
    }
  }, [user]);

  const { mutate: handleFillProfileInfo } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
  });

  const handleSubmit = () => {
    handleFillProfileInfo({ ...profilePayload, id: user?.user?.id });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>username</label>
                        <input
                            className="border border-white"
                            name="username"
                            value={profilePayload.username}
                            onChange={(e) => {
                            setProfilePayload({
                                username: e.target.value,
                                avatar_url: profilePayload.avatar_url,
                                full_name_en: profilePayload.full_name_en,
                                full_name_ka: profilePayload.full_name_ka,
                            });
                            }}
                        />
                </div>
                <div className="mb-4">
                    <label>Avatar Url</label>
                        <input
                            className="border border-white"
                            name="avatar"
                            value={profilePayload.avatar_url}
                            onChange={(e) => {
                            setProfilePayload({
                                username: profilePayload.username,
                                avatar_url: e.target.value,
                                full_name_en: profilePayload.full_name_en,
                                full_name_ka: profilePayload.full_name_ka,
                            });
                            }}
                        />
                </div>
                <div className="mb-6">
                    <label>Full Name Ka</label>
                        <input
                            className="border border-white"
                            name="fullnameka"
                            value={profilePayload.full_name_en}
                            onChange={(e) => {
                            setProfilePayload({
                                username: profilePayload.username,
                                avatar_url: profilePayload.avatar_url,
                                full_name_en: profilePayload.full_name_en,
                                full_name_ka: e.target.value,
                            });
                            }}
                        />
                </div>
                <div className="mb-6">
                    <label>Full Name En</label>
                        <input
                            className="border border-white"
                            value={profilePayload.full_name_en}
                            name="fullnameen"
                            onChange={(e) => {
                            setProfilePayload({
                                username: profilePayload.username,
                                avatar_url: profilePayload.avatar_url,
                                full_name_en: e.target.value,
                                full_name_ka: profilePayload.full_name_ka,
                            });
                            }}
                        />
                </div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    </div>
    );
};

export default ProfileView;