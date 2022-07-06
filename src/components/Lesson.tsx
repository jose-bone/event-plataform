import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import pt from "date-fns/locale/pt";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
  closeSidebar: () => void;
}

export function Lesson({
  title,
  slug,
  availableAt,
  type,
  closeSidebar,
}: LessonProps) {
  const { slug: currentSlug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: pt }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <div
      className={classNames("cursor-pointer", {
        "cursor-default": !isLessonAvailable,
      })}
      onClick={handleNavigateToVideo}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
            "relative before:absolute before:content-[''] before:bg-green-500 before:p-2 before:rotate-45 before:top-[45%] before:left-[-8px]":
              isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded py-[0.125rem] px-2 text-white border font-bold",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </div>
  );
}
