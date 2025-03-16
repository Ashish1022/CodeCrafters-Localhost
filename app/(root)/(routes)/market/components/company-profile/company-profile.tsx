import { Company } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import BackBtn from "./back-btn"
import CompanyDetails, { InsiderHolder } from "./company-details"
import EmployeeCard from "./employee-card"
import ExecutiveCard from "./executive-card"
export interface CompanyProfile {
  company: Company
}



export const CompanyProfile = ({ company }: CompanyProfile) => {
  const insiderHolders = company.yahooStockV2Summary.insiderHolders
  const arrHolders = insiderHolders.holders

  const fundOwnership = "Chirag"

  const numOfEmployees = [
      {
        amount: 28 + '+',
        name: "Employees"
      },
      {
        amount: 'Rs. ' + 100000,
        name: "Revenue"
      },
      {
        amount: "90+",
        name: "Staff"
      }

    ]
  const executives = [
      {
        name: arrHolders[0]?.name || "N/A",
        role: arrHolders[0]?.relation || "",
        shares: arrHolders[0]?.positionDirect?.fmt || "N/A",
        avatarImg: "/avatars/ava1.png",
      },
      {
        name: arrHolders[1]?.name || "N/A",
        role: arrHolders[1]?.relation || "",
        shares: arrHolders[1]?.positionDirect?.fmt || "N/A",
        avatarImg: "/avatars/ava2.png",
      },
      {
        name: arrHolders[2]?.name || "N/A",
        role: arrHolders[2]?.relation || "",
        shares: arrHolders[2]?.positionDirect?.fmt || "N/A",
        avatarImg: "/avatars/ava3.png",
      },
    ]
  return(

    <div className = "p-8 text-sm" >
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={company.logoSrc}
            alt="company logo"
            width={35}
            height={35}
            className="object-contain"
          />
          <div>
            <p className="text-lg font-semibold">{company.yahooStockV2Summary.price.longName}</p>
            <p className="text-sm text-muted-foreground">{company.symbol}</p>
          </div>
        </div>
        <BackBtn />
      </div>
      <div className="mt-4">
        <div className="mb-12 text-xl font-semibold border-b border-muted-foreground/30"></div>

        <div className="flex gap-8">
          <div className="p-8 rounded-lg h-[320px] w-[320px] items-center flex flex-col text-sm gap-3 shadow-xl dark:shadow-purple-500 dark:shadow-sm">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-semibold">Top Holding</h1>
                <h2 className="text-muted-foreground">{1000}</h2>
              </div>
              <div>
                <h1 className="font-semibold">Rs. {1000000}</h1>
                <h1 className="text-muted-foreground">{10}</h1>
              </div>
            </div>
            <Image
              alt="CEO image"
              src="/employees/contract.webp"
              width={90}
              height={110}
              className="object-cover min-h-[70px] mt-4"
            />
            <div className="flex flex-col items-center gap-4 pt-6 pb-8">
              <p className="text-center w-[170px] font-medium">{company.symbol}</p>
            </div>

          </div>

          <div className=" rounded-lg h-[320px] flex-1 flex flex-col px-6 pb-4 pt-4 justify-between shadow-xl ">
            <div className="flex justify-between gap-2 mt-4">
              {executives.map((item, index) => (
                <ExecutiveCard employee={item} key={index} />
              ))}
            </div>
            <div className="flex justify-between gap-2 mt-4">
              {numOfEmployees.map((item, index) => (
                <EmployeeCard data={item} key={index} />
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className=" h-[1200px] w-full mt-8">
          <CompanyDetails
            foundCompany={company}
          />
        </div>
      </div>
    </div >

  )
}