
type codeType = {
    _id:string,
    code: string;
    used: boolean;
  };
const getCodes = async() => {
  const allCodes: codeType[] = await (await fetch(`${process.env.site}/api/codes`,{cache:"no-cache" })).json();
  return (
    allCodes
  )
}
export default getCodes
