import type { PageProps } from '$fresh/server.ts';

export default function NavBar() {
  const activeMap = {
    Home: true,
    TextGen: false,
    Fracture: false,
  };
  // switch (props.params.url) {
  //   case ('/'):
  //     activeMap.home = true;
  //     activeMap.TextGen = false;
  //     activeMap.Fracture = false;
  //     break;
  //   case ('/textGen'):
  //     activeMap.home = false;
  //     activeMap.TextGen = true;
  //     activeMap.Fracture = false;
  //     break;
  //   case ('/fracture'):
  //     activeMap.home = false;
  //     activeMap.TextGen = false;
  //     activeMap.Fracture = true;
  //     break;
  //   default: {
  //     activeMap.home = true;
  //     activeMap.TextGen = false;
  //     activeMap.Fracture = false;
  //   }
  // }
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:ml-6 sm:block'>
              <nav className='flex space-x-4'>
                <a
                  href='/'
                  class='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
                >
                  Home
                </a>
                <a
                  href='/textGen'
                  className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
                >
                  Text Generation
                </a>

                <a
                  href='/fracture/static'
                  className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
                >
                  Fracture Project
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <a
            href='/fracture/static'
            className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
            aria-current='page'
          >
            Home
          </a>
          <a
            href='/textGen'
            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
          >
            Text Generation
          </a>
          <a
            href='/fracture/static'
            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
          >
            Fracture Project
          </a>
        </div>
      </div>
    </nav>
  );
}
