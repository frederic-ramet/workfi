import { NextPage } from 'next/types'

//Opportunity Creation Form
const CreateOpportunity: NextPage = () => {
  return (
    <div className="min-h-screen">
      <section className="flex flex-col items-start justify-start py-2">
        <div>
          <h1 className="mb-2 text-3xl font-bold leading-9">
            Project Galaxy Core Contract Gas Optimizations
          </h1>
          <div className="flex flex-row gap-8 text-sm font-normal leading-5 text-gray-500">
            <span className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              30 Days
            </span>
            <span className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              $3000
            </span>
            <span className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Posted on: May 10, 2022
            </span>
            <span className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Project Galaxy HQ
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col py-2">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:col-span-1 md:mt-0">
              <form>
                <div className="overflow-hidden">
                  <div className="py-6">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="erc-20-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ERC20 Token adress
                        </label>
                        <input
                          type="text"
                          name="erc-20-address"
                          id="erc-20-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="erc-20-price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ERC20 Price (USD based)
                        </label>
                        <input
                          type="number"
                          name="erc-20-price"
                          id="erc-20-price"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="loan-incentive"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Loan incentive (APR in %)
                        </label>
                        <input
                          type="number"
                          name="loan-incentive"
                          id="loan-incentive"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Validate
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-5 md:col-span-1">
              <div className="rounded-md bg-white p-5 shadow-md sm:m-5">
                <h3 className="rounded-full bg-purple-200 p-2 text-center text-sm font-medium leading-6 text-purple-400">
                  Project Galaxy Core Contract Gas Optimizations
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Loan opportunity: $3000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateOpportunity
