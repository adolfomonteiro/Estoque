import { useState } from "react";

export const StickyBar = () =>{
    return (
      <section>
        <div className="flex gap-4 items-center mt-8 px-4">
                <section>
                  <input type="text" placeholder="Informe o destinatário" className="border-2 rounded-lg py-2 w-full mt-2 outline-none" />
                  <input type="number" placeholder="Informe o valor" className="border-2 rounded-lg py-2 w-full mt-2 outline-none" />
                </section>
        </div>
      </section>
    );
};
  