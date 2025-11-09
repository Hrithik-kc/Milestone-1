"use client"
import { useRouter } from "next/navigation"
export default function Login() {
  const router=useRouter();
  return  <div className ="bg-white">
          <div className = "h-[40%] w-[100%] bg-gray-500 rounded-[10px] flex flex-row">
             <div className = "text-white font-bold text-[20px] pl-10 pt-3">envato</div> 
             <button className = " bg-lime-500 font-bold text-[15px] text-white w-25 h-10 rounded-[10px] mt-2 mb-2 ml-310 hover:bg-lime-600">Buy</button>
          </div>

          {/* socials */}
            <div className = "h-15 w-[100%] bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-500 flex flex-row">
              <div className = "text-white  text-[17px] pl-15 pt-4">Phone: 123456789</div>
              <div className = "text-white  text-[17px] ml-30 pt-4 font-bold">Email: </div><div className = "text-white text-[17px] ml-2 pt-4">food@restan.com</div>
              <div className = "flex flex-row-reverse mr-10 pt-2.5">
              <div className="">
                <select className="h-8 w-25 appearance-none ml-120   border-1 border-amber-500 text-center text-black font-bold rounded-md bg-white">
                  <option>English</option>
                  <option>French</option>
                  <option>Hindi</option>
                </select>
                <svg className="pointer-events">
                </svg>
                <img src = "https://i.pinimg.com/474x/78/c0/12/78c012e7678761400082c6130487a463.jpg" alt = "facebook" 
                className = "rounded-full h-3 w-3 " 
                ></img>
                </div>  
              </div>
            </div>
          {/* register top */}
            <div className ="h-[50%] w-[100%] flex flex-row ">
              <img src = "https://coffeecafe.42web.io/cafe%20image/image%201.jpg"
              alt = "image" className = "h-120 w-[100%]" /> 

              <div className = "grid grid-col-8 gap-2 absolute top-40 border-b-1 border-gray-500">
                <div>
                  <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" 
                  className = " top-35 left-10 h-20 w-30 ml-10 mb-5"></img>
                </div>  
                <div className = "ml-80 -mt-20">
                  {/* HOME */}
                  <select className = " top-90 left-10 font-serif font-bold text-white text-[20px] w-45 ml-45 -mr-3 appearance-none bg-transparent border-none focus:outline-none ">
                    <option>
                     Home
                    </option>
                  </select>
                  {/* PAGES */}
                   <select className = " top-90 left-10 font-serif font-bold text-white bg text-[20px] w-50 -ml-11  appearance-none bg-transparent border-none focus:outline-none">
                        <option className = "text-black">
                          About Us
                        </option>
                        <option className = "text-black">
                          Chef
                        </option>
                        <option className = "text-black">
                        Chef Details
                        </option>
                   </select>
                   {/* MENU */}
                    <select className = " top-90 left-10 font-serif font-bold text-white text-[20px] w-45 -ml-15 appearance-none bg-transparent border-none focus:outline-none">
                      <option className = "text-black">
                        PAGES
                      </option>
                        <option className = "text-black">
                          Menu Style One
                        </option>
                        <option className = "text-black">
                          Menu Style Two
                        </option>
                        <option className = "text-black">
                        Menu Style Three
                        </option>
                    </select>
                   {/* BLOG */}
                     <select className = " top-90 left-10 font-serif font-bold text-white text-[20px] w-45 -ml-15 appearance-none bg-transparent border-none focus:outline-none">
                        <option className = "text-black">
                          Blog
                        </option>
                        <option className = "text-black">
                          Blog
                        </option>
                        <option className = "text-black">
                          Blog
                        </option>
                     </select>
                </div>
                <div >
                  <img 
                    src = "https://www.kindpng.com/picc/m/478-4788427_shopping-cart-button-shopping-cart-logo-white-hd.png" alt="cart"
                   className = "rounded-[300px]  h-15 w-15 -mt-25 ml-270"
                  >
                  </img>
                </div>
                <div className = " border-1 border-white font-bold text-[20px] text-white w-40 h-10 rounded-[5px] pl-2 pt-1 -mt-25 ml-300 mr-29 hover:bg-white hover:text-black cursor-pointer">
                  <button >RESERVATION</button>
                </div>
              </div> 

              <div className = "absolute  top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center ">
              Login Now
              </div>
            </div>
          {/*register main*/}
          <div className = "h-[80%] w-[83%] shadow-xl/20 rounded-[5px] bg-white ml-30 mt-10 mb-10  flex flex-row">
              <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75" alt="bg"
              className = "w-[50%] h-170"
              ></img>
              <div className = "flex flex-col ">
                <div className = "font-serif text-[35px] pl-20 pt-15 text-[#AA6C39] font-semibold">WELCOME BACK</div>
                <div className = "text-[20px] pl-20  text-gray-500 -">Enter your email and password to continue</div>
                <input type = "email" placeholder="*Email" className = "w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"></input>
                <input type = "password" placeholder="*Password" className = "w-90 h-10 mt-5 ml-20 rounded-[5px] bg-gray-700 pl-2 border-1 border-gray-300 text-[20px]"></input>
                <button className = " bg-[#B8860B] font-bold text-[20px] text-white w-90 h-10 rounded-[5px] mt-10 ml-20 hover:bg-yellow-400 ">LOGIN</button>
                <div className = "font-serif text-[25px] text-black mb-6 pl-42 pt-10">Or login with</div>
                <div className = "flex flex-row">
                    <button className = " bg-white text-[20px] text-black w-40 h-12 rounded-[5px] ml-20 flex flex-row border-1 border-gray-300">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s" alt = "ggl" className = "pt-1 w-10 h-10"></img>
                        <div className = "pl-5 pt-1.5">Google</div> 
                    </button>
                    <div className = "relative inline-block">
                        <button className = " bg-white text-[20px] text-black w-40 h-12 rounded-[5px] ml-10 flex flex-row border-1 border-gray-300">
                        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSNFvomhiSK6UCLA0BAzdpFzc2kyuFOj4xefsRruR5w&s" alt = "ggl" className = "mask-clip-border pt-1 w-10 h-10 mix-blend-normal"></img>
                        <div className = "pl-5 pt-1.5">Facebook </div> 
                        </button>
                    </div>
                </div>
                <div>
                  <div className ="text-gray-500 text-[17px] ml-20 mt-6">Dont have an account?</div>
                  <button className ="text-[#B8860B] text-[17px] ml-65 -mt-6.5 underline cursor-pointer" onClick={()=>{
                    router.push("/register")
                  }}>Regsiter here</button>
                </div>
              </div>
          </div>
          {/*register bottom*/}
            <div className = "h-[100%] w-[90%] bg-[#1C1C1C] grid grid-cols-4  ml-15">
              {/* about us */}
              <div className = " ml-10 mt-20 border-r-2 border-gray-600 pr-10 mb-20">
                <div className = "font-bold text-[30px] text-white ">About Us</div>
                <div className = "text-white text-[17px] mt-5">Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</div>
                <div className = "h-10 w-10 flex flex-row mt-10 mb-10">
                  <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU7V53///8pS5je4u2GlL85VZwyUJouTplDXqHX3Oo1U5trfrNGYaPK0OImSZb7/P5hdq7k6PGMmsKst9NMZaXO1eXs7/W6w9pccqx8jbvV2unIz+JyhLamsdDo6/O9xdyfq8xVbKmSocYgRZWKmcIYQpRQGAjLAAAELklEQVR4nO3dUXuaPBjG8RBMwNiRIKLVqltt3+//FV+pczuY1Ygmz5Nc9/9kR7P8rqAICSiKU7afu1rkUu3mvf0tEydft2i0UdQb9rSU0c2is3+FrZOGeqOenpGuPQtLoak3J0halCdhK/IbwFNGtIPQujxHcEg7exR2kno7Aia7QthFrvvokFlY0TfUWxG0phfzfN+FQ3ouXD7H+UspJ/L5qna53H3HQaTeAIQQQgghhBBCCKFMUur8r8rtkosyWlbyz6ymMsboSkpZVbLS2pi0xUrLpp597lb9tN0vv9q3bVlON/3bz677dZisZ++1kU2SSKWqj3qyKs+z1N9ml/tNgldDldavu/IW7k8vqQ2ikvVh6s07DmNqQvnSLe/wJSfUZnfzvZey0Mj1feOXmlC/vN3tS0oot/cPYEpC1RzG+BISNt04YDLCajUSmIhQydHARITNbjQwDaGcjAcmIRxWnmUtVML/PCJNoRx7nEhFaNxDwASEH/ecDKYo1OvHgOyFSreZC/Ujh8IUhKraZC40s0eB3IUPfONORChGndYnJDTbh4HMhU/YSXkLld5nLjTvjwN5z1voz7soy3ba//inN85zT3e8DZer9XttdHUhasW1Gt9T33L7NRPMeHe8nDJ+Vy/sodHJ4b5S737AmUzT532837J+p11Nz32A3Qf1do6v8rkObFO+a8nrYJH0DbzSZ0J0m/INvLK/DVzWCe+kQnpcR9yk+0F6THp8pVllL9xlLzxkL0z7Rnof4QRC1kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5l4dQXclnkntSXXsFDnc6v9TfZzyEn+LKC3xFa3zC0sNblbTPXo0gfMteSDyDGkF4oP2wjSAkniOOIHzNXUi99jK8cE/8aw7hhVPib3XhhT+J54jDC6nn+cMLqWfBwwupl0wFF9pX4tOn4ELyRWHBhS31jxsFF5IvewsuXFGvPg0u/JX9GJJfigsunFGvIA4tpP+Ro9DCJbEvvLCk/qAJLvxBfbAILqS/GSO0kH6NdGjhmvpwGFxIfCkxvNBSnzsFFy6r3IXEM2sRhMQza0PKldPv23jc6Nxe+f8l8bzTiXjpBvpz/3nMcq8/rrwA+SfprfJYi3EtCCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsi/aEIliB7zEk1YC5e30DhB9DDeWEI9Fz3Nc15iCZte2AXJbhpJqBZWED3ZLZJQdoUorKN4J8YRamePwqIVBM/riSI0oi0GYVGK+KMYQ6jF8EcGYdE6GXsYwwuVdG1xFha2WzQ66uOxwwqV0c2iOz1OTPx+NdvPXf1Mwo3CCms378+PS/sfgu9R0N1eieIAAAAASUVORK5CYII="
                  className = "rounded-[5px]" alt = "fb"
                ></img>
                <img src = "https://assets1.chainstoreage.com/images/v/max_width_1440/2023-07/twitter-x-logo.png"
                  className = " h-10 w-10 ml-6 " alt = "tw"
                ></img>
                <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD////09PT6+voJCQnp6en39/dDQ0Ps7Ozx8fH5+fm7u7tzc3Obm5smJiZ5eXmBgYHa2to1NTUuLi6mpqaOjo7U1NRaWlppaWmxsbHi4uLExMQQEBC9vb3Ozs4ZGRlLS0uTk5NqamqgoKAiIiI8PDwNDnkzAAACkUlEQVR4nO3ci27aQBBG4VkIlPvdBAiFkpL3f8VCozQRqirZXv+z657vAZCOgPWyHmMGAAAAAAAAAAAAAAAAAAAAAAAAAAAA/K+e4vNO+mM2Hy8HnW58/cFyvFh551mxDM06XFz7pt2G+37bHL36JkNF381o4RP4XdR3d3LoO/eEgSEM5UvOuiMNDKH7Qxt4Vn0FvyRq38WDPPD2QVUGjh0CpcvNziUwBN1FY+BU2FUFLpwCb7sbUaF+Hf0gehMnboEhFJLCk2PhUlI4ciwMa0Hgs2eg5IIxdS3cCwp99jMftoLCrWthT1Dosen+pNh+a3/5Puq3vnBEYfaF7f+UUuhVGO/oP9XC9XOsxlQLv5nt4uwUEi6M1Jh0odmk/iqVeKHZvO4xXfKFZot651gZFJoVdW7qZFFYqzGTQrNLv+2FlY97Mio021QZc8iq0M6btheaXfdtLzSblTyczK/QbF1qaiXHwnI3s3IsfHsp80r5Fa5K9eVXuCp9EySvwrLraHaFpa+FeRUeK+xncio8VtqTZlQ4rT4KkEVhjb4sCmudYWRQWNSdp0q8cFF/5C/pwnmMebiECyOcd6dcuI50XybdwngTKqkWxkMhhekXtn+epv2Fik9p+2cT2z9f2v4Z4YtroWLO23dWfy4otKo3qKOYKQpLnsNHpXlm5tWxUPPck9vjh5odzZ3f84c/RYVuGzfFlu2d1wVDcql4tw+Sv/x48KILNGv6P1v+ZqAMtCf9etpXPFz5xVX9uPPoTRto6t+JA8l27UGlu9QVSReZTzvVl7EjvEw8KBS/M7pTt767edOHGlvRZvsfjq+b02HYiW/YO+0nV+88AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA34BZfnOa8VJqk7AAAAAElFTkSuQmCC"
                  className = " h-10 w-10 ml-6 " alt = "yt"
                ></img>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIZNwih6eXIffaQEDckh1GtVTsxxkkmMvo4keYRVLAg&s"
                  className = " h-10 w-10 ml-6 rounded-[10px]" alt = "l-in"
                ></img>
                </div>
              </div>
              {/* explore */}
              <div>
                <div className = "font-bold text-[30px] text-white ml-20 mt-20 mb-10 flex flex-col">Explore</div>
                <div className = "text-white text-[17px] ml-20 mb-5 -mt-5 cursor-pointer hover:text-yellow-400">Company Profile</div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400">About </div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400">Help Center</div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400">Career</div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400">Features</div>
              </div>
            {/*Contact info*/}
            <div>
              <div className = "font-bold text-[30px] text-white ml-0 mt-20 mb-10 flex flex-col">Contact Info</div>
                <div className = "text-white text-[17px] mb-5 -mt-5 w-70">1234 - Bandit Tringi St, Sonipat, Haryana</div>
                <div className = "text-white text-[17px] mb-5">Phone: +91 1234567890</div>
                <div className = "text-white text-[17px] mb-5">Email: food@restan.com </div>
            </div>
            {/* Newsletter */}
            <div >
                <div className = "font-bold text-[30px] text-white  mt-20 mb-10 flex flex-col">Newsletter</div>
                <div className = "text-white text-[17px]  mb-5 -mt-5 cursor-pointer hover:text-yellow-400">Join our subscribers list to get the latest news and special offers. </div>
                <input type = "email" placeholder="Your Email Address" className = "w-60 h-10 mt-5 -ml-5 rounded-[5px] pl-2 border-b-1 border-b-gray-300 text-[16px]">
                </input>
            </div>
          </div>
          {/* register footer */}
          <div className = "h-100 w-[100%] bg-gray-400 flex flex-row">
            
          </div>
          
  </div>
}