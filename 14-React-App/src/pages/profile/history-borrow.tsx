import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { BookCard, BookCardLoading } from "@/components/book-card";
import Pagination from "@/components/pagination";
import Layout from "@/components/layout";

import { getBorrows, Borrow } from "@/utils/apis/borrows";
import { Meta } from "@/utils/types/api";

const HistoryBorrow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();

  const [isLoadingBorrows, setIsLoadingBorrows] = useState(true);
  const [borrows, setBorrows] = useState<Borrow[]>([]);
  const [meta, setMeta] = useState<Meta>();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  async function fetchData() {
    setIsLoadingBorrows(true);
    let query: { [key: string]: string } = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }

    try {
      const result = await getBorrows({ ...query });
      const { datas, ...rest } = result.payload;
      setBorrows(datas);
      setMeta(rest);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    } finally {
      setIsLoadingBorrows(false);
    }
  }

  function handlePrevNextPage(page: string | number) {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
        {isLoadingBorrows
          ? [...Array(10).keys()].map((key) => <BookCardLoading key={key} />)
          : borrows.map((borrow) => (
              <BookCard
                key={borrow.id}
                data={borrow.book}
                navigate={`/books/${borrow.book.id}`}
              />
            ))}
      </div>
      <Pagination
        meta={meta}
        onClickPrevious={() => handlePrevNextPage(meta?.currentPage! - 1)}
        onClickNext={() => handlePrevNextPage(meta?.currentPage! + 1)}
        onClickPage={(page) => handlePrevNextPage(page)}
      />
    </Layout>
  );
};

export default HistoryBorrow;