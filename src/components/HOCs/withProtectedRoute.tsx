import { getAuthValue } from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

function withProtectedRoute(WrappedComponent: any) {
  return function Wrapper(props: any) {
    const { loggedIn } = getAuthValue();
    const router = useRouter();
    console.log("loggedInloggedInloggedIn", !loggedIn);
    useLayoutEffect(() => {
      if (!loggedIn) {
        router.push("/login");
      }
    }, [loggedIn]);

    return <WrappedComponent {...props} />;
  };
}

export default withProtectedRoute;
