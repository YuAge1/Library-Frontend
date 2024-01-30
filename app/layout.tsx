import Layout, {Content, Footer, Header}  from "antd/es/layout/layout"
import {Menu}  from "antd";
import "./globals.css";
import Link from "next/link";

const items = [
  {key: "home", label: <Link href={"/"}>Home</Link>},
  {key: "books", label: <Link href={"/books"}>Books</Link>}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Header>
            <Menu 
            theme="dark" 
            mode="horizontal" 
            items={items} 
            style={{flex: 1, minWidht: 0}}
            />
          </Header>
          <Content style={{padding: "0 48px"}}>{children}</Content>
          <Footer style={{textAlign: "center"}}>
            Library 2024 created by Nikita Marchevskiy
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
