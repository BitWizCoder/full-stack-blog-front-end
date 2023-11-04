"use client";

import { Sidebar } from "flowbite-react";
import { HiHome, HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Sidebar aria-label="Default sidebar example" className="h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item>
              <Link to={"/"}>
                <img
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                  alt=""
                />
              </Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiHome}>
              <Link to={"/dashboard"}>Home</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiPlusCircle}>
              <Link to={"/dashboard/new-article"}>Add an Article</Link>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default Dashboard;
