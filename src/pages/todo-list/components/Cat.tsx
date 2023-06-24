import Rive, {
  Layout as RiveLayout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

export const Cat = () => (
  <div style={{ width: "100%", height: 100 }}>
    <Rive
      src="https://res.cloudinary.com/dy5pujkzs/raw/upload/v1687605393/4525-9192-cat-and-virus_2_puktam.riv"
      layout={
        new RiveLayout({ fit: Fit.Contain, alignment: Alignment.TopCenter })
      }
    />
  </div>
);
