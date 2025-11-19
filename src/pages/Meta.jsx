import CardItem from "../components/CardItem";
import { metaData } from "../data";

function Meta({ onCopy }) {
  return (
    <main className="p-6 pt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Meta Augments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metaData.map((item, idx) => (
          <CardItem key={idx} item={item} onCopy={onCopy} />
        ))}
      </div>
    </main>
  );
}

export default Meta;
