// Renders JSON-LD blocks as <script type="application/ld+json">. Next 16 pattern.
export default function JsonLd({ data }: { data: object[] }) {
  return (
    <>
      {data.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
