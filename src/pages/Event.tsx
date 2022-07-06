import { useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [modalState, setModalState] = useState(false);

  function handleOpenModal() {
    setModalState(true);
  }

  function handleCloseModal() {
    setModalState(false);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        modalState={modalState}
        openModal={handleOpenModal}
        closeModal={handleCloseModal}
      />
      <main className="flex flex-1">
        {slug && !modalState ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1" />
        )}
        <div
          className={classNames("md:flex", {
            "absolute z-10 flex w-full": modalState,
            hidden: !modalState,
          })}
        >
          <Sidebar closeModal={handleCloseModal} />
        </div>
      </main>
    </div>
  );
}
