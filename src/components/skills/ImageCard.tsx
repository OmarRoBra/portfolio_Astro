import "./skills.css";
import { Card, CardFooter, Slider } from "@nextui-org/react";
export default function App({ img }: { img: string }) {
  return (
    <Card isFooterBlurred radius="lg" className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            alt="Woman listing to music"
            className="object-cover p-10 pt-2 mb-2"
            height={100}
            src={img}
            width={250}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <Slider
              key="primary"
              color="primary"
              step={0.01}
              maxValue={1}
              minValue={0}
              hideThumb={true}
              defaultValue={0.7}
              aria-label="Temperature"
              className="max-w-md"
            />
          </CardFooter>
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </Card>
  );
}
