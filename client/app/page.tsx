export default function Home() {
  return (
    <section className=''>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-xl md:text-6xl font-bold'>Welcome to Spensify</h1>
        <p className='text-base md:text-xl'>The best budgeting app on the market</p>

        <div className='mt-8 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold'>Ask questions and request support</h2>
          <p className='text-lg'>We&apos;re here to help you manage your budget effectively!</p>
          <a href='mailto:lucas.ds.developer@gmail.com' className='mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded'>Contact Us</a>
        </div>

      </div>
    </section>
  );
}
