import ProfileMainLayout from "@/layouts/ProfileMainLayout/ProfileMainLayout";
import { getCurrentUser } from "@/lib/auth";
import { getUserInfo } from "@/lib/user";

export default async function ProfilePage() {
    const user = await getCurrentUser();
    const userInfo = await getUserInfo({ userId: user!.userId });
    return <ProfileMainLayout />;
}
