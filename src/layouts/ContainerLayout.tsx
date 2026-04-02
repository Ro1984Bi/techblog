export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-[90%] mx-auto xl:w-[75%] mt-32">{children}</section>
  );
}
