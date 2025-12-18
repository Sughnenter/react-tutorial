import { Header } from "../components/header";
import "./NotFound.css";
export function NotFound({cart}) {
  return (
    <>
      <title>Page Not Found</title>
      <Header cart={cart} />
      <div className="not-found"> error 404 not found </div>
    </>
  );
}
