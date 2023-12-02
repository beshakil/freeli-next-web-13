"use client"
import React, { useState } from 'react';
import Leftbar from './components/leftBar';
import ChooseCreateConv from './components/Popups/ChooseCreateConv';
import classNames from 'classnames';
import './globals.css';
import "./App.css";
import 'rc-tooltip/assets/bootstrap.css';
import "../app/components/admin/admin.css";
import "react-datepicker/dist/react-datepicker.css";
import 'emoji-mart/css/emoji-mart.css';

const metadata = {
  title: 'WorkFreeli',
  description: 'WorkFreeli',
}
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }) {

  const currentPage = usePathname();
  const [chooseCreate, setchooseCreate] = useState(false);


  return (
    <html lang="en">
      <title>
        Connect
      </title>

      <body id="connectBody"
        suppressHydrationWarning={true}>
        <div id="root">
          {currentPage === '/login' || currentPage === '/signup' ?
            children :
            <div className="main_container" id="root">
              <Leftbar
                chooseCreate={chooseCreate}
                setchooseCreate={setchooseCreate}
              />
              {chooseCreate ? <ChooseCreateConv
                chooseCreate={chooseCreate}
                setchooseCreate={setchooseCreate}
              /> : ''}
              {currentPage === '/connect/filehub' ?
                children
                :
                <div className="right_container" id="root">
                  {children}
                </div>}
            </div>
          }
        </div>
      </body>
    </html>
  )
}
