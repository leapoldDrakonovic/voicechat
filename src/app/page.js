"use client";

import Footer from "@/components/footer";
import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/buttons";
import { Input } from "@/components/ui/input";
import { ServerUsersList } from "@/components/user";
import { useState } from "react";
import Header from "@/components/header"
import ServersList from "@/components/servers-list";



export default function Home() {
  const [openServersModal, setOpenServersModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleCloseServersModal = () => setOpenServersModal(false);
  const handleCloseCreateModal = () => setOpenCreateModal(false);

  return (
    <>
     <Header/>
     <div className=" relative flex flex-row items-start justify-center m-auto h-screen overflow-hidden gap-4 mt-4">
      {/* Modal for create server */}

      <Modal isOpen={openCreateModal} onClose={handleCloseCreateModal}>
        Create Server
      </Modal>

      {/* Modal for search servers */}
      <Modal isOpen={openServersModal} onClose={handleCloseServersModal}>
        <div className="w-full flex justify-center mt-4">
          <Input />
        </div>
        <div className="w-full h-full justify-center mt-4 overflow-y-scroll">
          <ServersList/>
        </div>
      </Modal>

      {/* sidebar */}
      <div className="border w-[400px] h-[400px] rounded-lg overflow-hidden overflow-y-scroll ">
        <div>
          <ul className="flex flex-col gap-4 p-2 items-center">
            <li>
              <Button className="text-2xl" onClick={() => setOpenCreateModal(true)}>
                Create Server
              </Button>
            </li>
            <li>
              <Button className="text-2xl" onClick={() => setOpenServersModal(true)}>
                Find Server
              </Button>
            </li>
            <li>
              <h4 className="text-center mb-2">My servers</h4>
              <ServersList/>
            </li>
          </ul>
        </div>
      </div>

      {/* users list */}
      <div className="border rounded-md p-4 overflow-y-auto h-[500px] w-1/2 ">
        <ServerUsersList />
      </div>


    </div>
      <Footer/>
    </>
   
  );
}
