export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background bg-white p-8">
        <h1 className="text-lg font-semibold">
          Welcome to the Fauji Fertilizer Company Limited (FFC) Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This chatbot is meant to help you with Procurement Procedures Manual (PPM) of Fauji Fertilizer Company Limited (FFC). 
          You can ask it questions about procurement policies, purchase requisitions, criteria of selecting and approving vendors,
          Transportation, Receipt, and more!
        </p>
      </div>
    </div>
  );
}
