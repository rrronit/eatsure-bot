import codes from "@/models/codes";
import CodeComponent from "./component/codeComponent";
import connectMongodb from "@/lib/mongodb";

type codeType = {
  _id: string;
  code: string;
  used: boolean;
};

export default async function Home() {
  await connectMongodb();

  const allCodes: codeType[] = await codes.find();

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container">
        <h1 className="text-4xl font-extrabold text-gray-200 mb-8">Code List </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCodes.map((code) => (
            <CodeComponent
              key={code._id.toString()}
              id={code._id.toString()}
              code={code.code}
              used={code.used}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
