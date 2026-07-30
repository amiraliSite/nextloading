import Loading from "./Loading";

export default function Page() {
  const isLoading = true; 

  if (isLoading) {
    return <Loading />;
  }

  return <div>محتوای اصلی سایت</div>;
}