import ReactDOM from "react-dom/client";
import Loading from "@/components/loading";

let loadingMaxCount = 0;

export const showFullScreenLoading = () => {
  if (loadingMaxCount == 0) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.append(dom);
    ReactDOM.createRoot(dom).render(<Loading />);
  }
};

export const hideFullScreenLoading = () => {
  if (loadingMaxCount <= 0) return;
  loadingMaxCount--;
  if (loadingMaxCount === 0) {
    document.body.removeChild(
      document.getElementById("loading") as HTMLDivElement
    );
  }
};
