// "use client";

// import { createDataAttribute } from "next-sanity";
// import { useOptimistic } from "next-sanity/hooks";
// import { client } from "@/sanity/lib/client";
// import type { PAGE_QUERYResult } from "@/sanity/types";


// type PageBuilderProps = {
//   content: NonNullable<PAGE_QUERYResult>["content"];
//   documentId: string;
//   documentType: string;
//   className?: string;
// };

// const { projectId, dataset, stega } = client.config();

// export const createDataAttributeConfig = {
//   projectId,
//   dataset,
//   baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
// };

// type BaseBlock = {
//   _type: string;
//   _key: string;
// };

// export function PageBuilder({ content, documentId, documentType, className = '' }: PageBuilderProps) {
//   // Use optimistic updates for real-time previews
//   const blocks = useOptimistic<
//     NonNullable<PAGE_QUERYResult>["content"] | undefined,
//     NonNullable<PAGE_QUERYResult>
//   >(content, (state, action) => {
//     if (action.id === documentId) {
//       return action?.document?.content?.map(
//         (block) => state?.find((s) => s._key === block?._key) || block
//       );
//     }
//     return state;
//   });

//   if (!Array.isArray(blocks)) {
//     return null;
//   }

//   return (
//     <main
//       data-sanity={createDataAttribute({
//         ...createDataAttributeConfig,
//         id: documentId,
//         type: documentType,
//         path: "content",
//       }).toString()}
//       className={className}
//     >
//       {blocks.map((block) => {
//         const DragHandle = ({ children }: { children: React.ReactNode }) => (
//           <div
//             data-sanity={createDataAttribute({
//               ...createDataAttributeConfig,
//               id: documentId,
//               type: documentType,
//               path: content[_key=="${block._key}"],
//             }).toString()}
//           >
//             {children}
//           </div>
//         );

//         switch (block._type) {
//           case "awards":
//             return (
//               <DragHandle key={block._key}>
//                 <Awards {...block} />
//               </DragHandle>
//             );
//           default:
//             return (
//               <div key={(block as BaseBlock)._key}>
//                 Block not found: {(block as BaseBlock)._type}
//               </div>
//             );
//         }
//       })}
//     </main>
//   );
// }