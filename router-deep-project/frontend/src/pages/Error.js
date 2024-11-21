import MainNavigation from "../components/MainNavigation";import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error ocured!";
  let message = "Smth went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else if (error.staus === 400) {
    title = "Not found";
    message = "Could not find resurce or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
