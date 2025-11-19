import CardItem from "../components/CardItem";
import { raazaData } from "../data";

function Raaza({ onCopy }) {
  return (
    <main className="p-6 pt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Raaza Augments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {raazaData.map((item, idx) => (
          <CardItem item={item} onCopy={() => onCopy(item.jp)} />

        ))}
      </div>
    </main>
  );
}

export default Raaza;
