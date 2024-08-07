import React from "react";
import IconImage from "../../assets/images/Icon.png";
const CampusGridLayout = () => {
    return (
        <>
        {/* <div className="grid w-[1440px] h-[651px] items-center justify-center bg-[#FFFFFF]"></div> */}
        <div className="flex flex-col mb-10 bg-tertiary xl:gap-10">
        <div className="flex flex-col mx-auto xl:w-[30.5rem] mb-8 xl:gap-4 text-center justify-center">
          <p className="text-4xl font-[Monserrat] font-semibold text-primary">
            What is in for <span className="text-dark_purple">Airvend</span> Campus Ambassadors.</p>
          <p className="flex flex-col tracking-normal text-start xl:text-center opacity-80 p-4 font-medium text-sm items-center text-secondary">
            Live your best life. Make and receive payments from the comfort of
            your home. Life shouldn’t be stressful when we’ve got your back.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3  xl:grid xl:grid-cols-3 items-center justify-center bg-tertiary mx-auto gap-10">
          <div className="bg-tertiary border-1 w-[353px] h-[303px] border-solid border-tertiary drop-shadow-md  rounded-xl p-4">
            <div className="flex flex-col items-center mt-3 justify-center  w-72 gap-y-3 bg-white">
              <img className="flex flex-col w-14 " src={IconImage} />
              <div className="flex flex-col text-secondary font-medium opacity-85 font-[montserrat] text-2xl line-[29px] text-center">
                Access to Career Opportunities{" "}
                <p className="flex w-[296px] h-[105px] p-1 opacity-65 text-base leading-5 text-center text-secondary">
                  Gain access to career development resources and opportunities.
                  This includes workshops, mentorship sessions and internship or
                  job offers to help ypu advance your career journey
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tertiary w-[353px] h-[303px] drop-shadow-md rounded-xl p-4">
            <div className=" flex flex-col w-[324px] h-[197px] mt-10 mx-auto gap-y-3 bg-white">
              <img
                className="flex flex-col justify-center mx-auto"
                src={IconImage}
              />
              <div className="flex flex-col font-[montserrat] pb-1 font-medium text-2xl leading-5 text-center text-secondary opacity-85">
                Networking Opportunities{" "}
                <p className="flex opacity-65 p-2 font-rubik font-normal text-sm leading-6 text-center">
                  Join and become part of the community of likeminded individual
                  from different schools to foster connections that can lead to
                  collaborations and lifelong friendship
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tertiary drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col w-[324px] mt-10 mx-auto h-[197px] gap-y-2 bg-white">
              <img className="flex mx-auto" src={IconImage} />
              <div className="flex flex-col font-[montserrat] font-medium text-2xl leading-6 text-center text-secondary opacity-85">
                Internship Opportunities
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-secondary">
                  Get an opportunity to intern with for 6-months to gain
                  valuable hands-on experience and enhance your skills to make
                  meaningful contribution to your team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3  xl:grid xl:grid-cols-3 items-center justify-center mt-10 mx-auto gap-10">
          <div className="bg-tertiary drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col w-[296px] mt-8 mx-auto h-[205px] gap-y-2 bg-white">
              <img className="flex mx-auto" src={IconImage} />
              <div className="flex flex-col font-[montserrat] font-medium gap-[0.5rem] text-3xl leading-6 text-center text-secodary opacity-85">
                Early access to all Airvend events
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-secondary">
                  Get an exclusive early access to all Airvend events and all
                  opportunity to network with Industry leaders and likemind
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tertiary drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col w-[296px] mt-3 mx-auto h-[247px] gap-2 bg-white">
              <img className="flex mx-auto" src={IconImage} />
              <div className="flex flex-col font-[montserrat] gap-[0.5rem] font-medium text-3xl leading-6 text-center text-secondary opacity-85">
                Certification upon completion
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-secondary">
                  Get certified upon completion ambassadorship program which
                  will serve as a valuable credential for your resume showcasing
                  your involvement and commitment
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tertiary drop-shadow-md w-[353px] h-[303px] rounded-xl p-4">
            <div className="flex flex-col mt-6 w-[296px] mx-auto h-[226px] gap-y-2 bg-white">
              <img
                className="flex flex-col mx-auto"
                src={IconImage}
              />
              <div className="flex flex-col font-[montserrat] gap-[0.5rem] font-medium text-3xl leading-6 text-center text-secondary opacity-85">
                Exclusive Branded Merch
                <p className="flex opacity-65 p-1 font-rubik font-normal text-sm leading-6 text-center text-secondary">
                  As campus ambassador you’ll receive exclusive branded merch.
                  This includes event swag that will make you stand out and show
                  your ambassador status
                </p>
              </div>
            </div>
          </div>
        </div> 

        </div>
        </>
    )
}
export default CampusGridLayout;