import { Header } from "../components/header";
import "./NotFound.css";
export function NotFound() {
  return (
    <>
      <title>Page Not Found</title>
      <Header />
      <div className="not-found"> error 404 not found </div>
    </>
  );
}
