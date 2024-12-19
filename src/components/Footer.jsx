import React from 'react';

export default function Footer() {
    return (
        <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
            <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between z-30">
                <div class="mr-12 hidden md:block">
                    <span>Get connected with us:</span>
                </div>
                <div class="flex justify-center items-center">
                    <a
                        href="https://www.facebook.com/g2p.poolvilla"
                        target="_blank"
                        class="mr-6 text-neutral-600 dark:text-neutral-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                </div>
            </div>


            <div class="mx-6 pt-8 pb-4 text-center">
                <div class="mb-6">
                    <h5 class="mb-2 font-bold uppercase">Explore Our World</h5>
                    <p class="mb-4">
                        Embark on an adventure of a lifetime and uncover hidden
                        wonders. Your journey begins now!
                    </p>
                </div>
            </div>

            <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
                <span>© 2023 Copyright: </span>
                <a class="mx-3" href="#">
                    <img
                        src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                        class="h-5"
                        alt="TE Logo"
                        loading="lazy"
                    />
                </a>

                <a
                    class="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="https://tw-elements.com/"
                >
                    Tailwind Elements
                </a>
            </div>
        </footer>
    );
};


