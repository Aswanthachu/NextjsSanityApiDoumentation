
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

const imageBuilder = urlBuilder({
    projectId:"3bjwcw6a",
    dataset:'production',
  });

 export const components = {
    types: {
      image: ({ value, isInline }) => {
        const { width, height } = getImageDimensions(value);
        return (
          <img
            src={imageBuilder.image(value).url()}
            alt={value.alt || " "}
            loading="lazy"
            className={`my-8 mx-auto ${
              isInline ? "max-w-xs" : "max-w-full"
            } rounded-lg shadow-lg`}
            style={{ aspectRatio: width / height }}
          />
        );
      },
    },
    types: {
      image: ({ value, isInline }) => {
        const { width, height } = getImageDimensions(value);
        return (
          <img
            src={imageBuilder.image(value).url()}
            alt={value.alt || " "}
            loading="lazy"
            className={`my-8 mx-auto ${
              isInline ? "max-w-xs" : "max-w-full"
            } rounded-lg shadow-lg`}
            style={{ aspectRatio: width / height }}
          />
        );
      },
    },
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-bold mb-5">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-bold mb-5">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-bold mb-5">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl font-bold mb-5">{children}</h4>,
      h5: ({ children }) => <h5 className="text-lg font-bold mb-5">{children}</h5>,
      h6: ({ children }) => <h6 className="text-sm font-bold mb-5">{children}</h6>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),

      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
      ul: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
      ol: ({ children }) => (
        <ol className="list-decimal ml-8 my-4">{children}</ol>
      ),
      li: ({ children }) => <li className="mb-2">{children}</li>,
      p: ({ children }) => <p className="text-sm my-6">{children}</p>,
      b:({ children }) => <p className="font-semibold">{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <Link
            href={value.href}
            rel={rel}
            className="text-blue-500 hover:text-blue-700"
          >
            {children}
          </Link>
        );
      },
    },
  
  };