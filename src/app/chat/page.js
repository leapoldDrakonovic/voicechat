
"use client"; import React from "react" 
import Footer from "@/components/footer"; 
import { Modal } from "@/components/modal"; 
import { Button } from "@/components/ui/buttons"; 
import { Input } from "@/components/ui/input"; 
import { ServerUsersList } from "@/components/user"; 
import { useState, useEffect } from "react"; 
import Header from "@/components/header" 
import {ServersList, MyServersList} from "@/components/servers-list";
 import { useRouter } from "next/navigation"; 
 import {LoadingWindow} from "@/components/loader" 
 import {CreateServerForm} from "@/components/forms" 
 import useSession from "@/hooks/useSession"

export default function Component() {
  const router = useRouter()
  const [openServersModal, setOpenServersModal] = useState(false)
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const { isSession } = useSession()

  if (isSession === null) {
    return <LoadingWindow />
  }

  if (!isSession) {
    router.push("/sign-in")
    return null
  }

  return (
    <>
      <Header/>
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-200">
        <div className="p-4">
          <Button
            onClick={() => setOpenCreateModal(true)}
            className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 text-sm font-medium"
          >
            Create Server
          </Button>
          <Button
            onClick={() => setOpenServersModal(true)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full py-2 text-sm font-medium"
          >
            Find Server
          </Button>
        </div>
        <div className="px-4 py-2">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">My Servers</h4>
          <MyServersList />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-6">
          <ServerUsersList />
        </div>
      </main>

      {/* Modals */}
      <Modal open={openServersModal} onClose={() => setOpenServersModal(false)}>
        <div className="p-6">
          <Input className="mb-4 w-full" placeholder="Search servers..." />
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-2">My Servers</h4>
              <MyServersList />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-2">Other Servers</h4>
              <ServersList />
            </div>
          </div>
        </div>
      </Modal>

      <Modal open={openCreateModal} onClose={() => setOpenCreateModal(false)}>
        <div className="p-6">
          <CreateServerForm />
        </div>
      </Modal>
    </div>
    </>
  )
}