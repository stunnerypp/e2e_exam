import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>YPP Test</title>
      </Head>
      <main>
          <h1>This is a test.</h1>

        <form action="https://stunnermedia.us21.list-manage.com/subscribe/post?u=45d264218be10117ae193efb4&amp;id=a098baab9a&amp;f_id=0008d6e1f0" method="post">
          <input id="email" type="email" name="EMAIL" placeholder="Email" required />
          <input id="first-name" type="text" name="FNAME" placeholder="First Name" />
          <input id="submit" type="submit" value="Subscribe" name="subscribe" />
        </form>
      </main>
    </>
  )
}
