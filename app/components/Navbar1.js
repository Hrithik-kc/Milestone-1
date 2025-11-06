export default function Navbar() {
    return <div className = "static ">
                    <div className = "h-[40%] w-[100%] bg-gray-500 rounded-[10px] flex flex-row">
                <div className = "text-white font-bold text-[20px] pl-10 pt-3 sm:block">envato</div> 
                <button className = "md:flex flex-auto md:bg-lime-500 font-bold text-[15px] text-white w-25 h-10 rounded-[10px] mt-2 mb-2 mr-10 ml-280 hover:bg-lime-600 pt-2 pl-7  ">Buy</button>
            </div>
          {/* socials */}
            <div className = "flex flex-row md:h-15 w-[100%] bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-500 flex flex-row">
              <div className = "text-white  text-[17px] pl-15 pt-4">Phone: 123456789</div>
              <div className = "text-white  text-[17px] ml-30 pt-4 font-bold">Email: </div><div className = "text-white text-[17px] ml-2 pt-4">food@restan.com</div>
              <div className = "ml-90 mt-2 h-10 w-10"><img src = "https://t3.ftcdn.net/jpg/08/16/25/90/360_F_816259007_nf2D0WfuuMYXzQGxdFnWOQuB9bUCakYI.jpg" className ="h-10 w-10 rounded-full"></img></div>
              <div className = "flex flex-row-reverse mr-10 pt-2.5">
              <div className="">
                <select className="h-8 w-25 appearance-none ml-4 border-1 border-amber-500 text-center text-black font-bold rounded-md bg-white">
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
              <div className = "border-r-1 border-gray-500 h-10 mt-2.5 -ml-50"></div>
              <div className = "mt-2 ml-10"><img src = "https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-icon-svg-download-png-721949.png?f=webp" className = "rounded-full h-10 w-10"></img></div>
               <div className = "mt-2 ml-5"><img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEVHqej///83pOc/pudCp+gzo+ff7/vx+P32+/6Nx/CFw+/0+v7H4/duuew+p+fr9fxPrel4ve1aseq+3/av1/SdzvHS6Plmteuz2fSo0/Pc7vrO5viYzPHm8vvG4veGxO8cXmsdAAAFAklEQVR4nO3c67ayIBAGYBvwWCJqZger+7/LD3fHXVpiuKFvvc+v/tSaCYQZ0jwPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4eFwq3HcVUOCOvqOu0LiSRsB2NeUT5ZptFs1YYrI8edQ/llw4wJ7kOZ79Eh9R/zoaJ9CtTJHmYdQjSh3Fk7Dg/WsyQs7Hvq6KuBJVS3q5HTiLezzKLFyjPlzTmfcLb9uTXXpHp+TMZyU07j5uRX6MJtJrFI1JkRdifoBIT50Rec/oaQosJilQFkGsHwNK+GXrRyHx5HeXE5hCWsxEp8uJdgmpVvb1cjLoODKGfQKJaL0Xxeoo+CCeKfRCenqPQSpF2OgnOapuVDttcwsiHzyQWayWYtl8eJ6+eLo0X7kYjGZyi1JqjKkHO/GKTpVaG0s9uoVT+sPfcxn2ArPBJpbdXH29nuaH7aMphDZB4v47ePtKrq928fbUY+P0Z9yuebTFgvdG5CqPg8iqwtdrIh4gGrDf+aniGV6G0Vnk/hlKKt1/2iASjwtqGwZ6Cyd4Mo0hGJKhZUJjkz5/jKeWreNhSP8HUbmfxbN68OG/RrGeU0OIIqnjX3UElrC8qyjrf0S+we0Yj8r64jj05Ms0MS2b5hOZ5qbnYx6Lz3EyrZLNVydx5dVlFa0nPI6CXYW79BJX3TdOToFJJ/gqS6WWYWM/Q48GbGLeblN1l6e+1Mjzaz5Ad34cZ7iqVJbF2ytJCK0MHxtCjF6eC9/aHZZxKj3R6J3UdOnDWLQqtkKOOKsjxDD1qtGLWY/WM5up0ojiNwvoY/ux3+rXmUJHt/Hi+SttNnektkMPNbZ1dXLRn+kHVHhZ1V+AfC2xnyE/raFZWeTVJhlbP83/0F95mbGy2hj+0uz1N9os26vyd2hwHNgu9nyC02V5oWpMmuLW+0PQcRRmztL7QvO2AP+RE3S3edcAfsF6z/WAjzrCHWjlwGXpTlt1W76K5w+X7UEeyvxuesKkWm8CNSarQNFX3rHJjkrZI//ekIaTtvO5MMoo7F0q2K0o0bj8YyInt/oYVpsu3zJl15kxQYrZXdGiduRB+MvD4e4i57XQeEVPIl7GpCmfcncfTEbtl1cTNZr01NFUjl7aKlvE20bUhNN4mRg4uM2bbREe6intm28S99UPEDkbbRPv3J3Tg0lzdVrq2zJyYaxPnru0UF8YaDP0HVP6K5k0IfUqnuqbfjIzi3nYWL5GBPaN2qy18xOSn5dvR2YvwjPuJ3m1dDzYOX4QXjCXjx9H+r9qDCJLNQu8WxLOV61P0iqtmmIpc7wav2Wxr+35gPX6im+D+q566Z0z7F/7Ac7He7iHoqF2Hb78oQUG5/qHboefvIhzEKB+xW6y/Y5toH2aleMx5xphH+v+e2iJEWo7pg7Mhzy1axblgxIr4MO6w1PpjMX2Kgvk+qa3dK9J4sxt7FDwf/oj0X5OlCi8Lo8/OZw7C4Rnqpx8fkgap270Ep/ijVimL3d8EmWhG/xQTNp7DE/SGUTJqru5j+or8WsJPS802Ilqk/tfk1+IkY41KbdtI96+/J0wluRuyb+xi2fuMsOtUX19vdi9OL8JFVfvfc/V1UsUbFUm1Xu2z+XVAozALFssml37HM7PfiPP2YUpPtv+FmNZ1XRRSnJ+u/M+0/2fJ/+e/tAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABw2D9CmzsMT+QcxQAAAABJRU5ErkJggg==" className = "rounded-full h-10 w-10"></img></div>
                <div className = "mt-2 ml-5"><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbymjuKDdyRA0IAVpbPcm4w5yV3dAg5-Khy78km2--ag&s" className = "rounded-full h-10 w-10"></img></div>
                 <div className = "mt-2 ml-5"><img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUueLb///8gcrMxe7gHbLDs8/gYcLL0+fyUttbA1OckdLQQbrGMrtHe5/F9p8+3y+GpxN5uncnH2OmGrNFKiL5VjcHa5O/M3OtdksM8gbujwNywyOB+ps3k7fVmmcdCg7wAaK/njD8SAAADhUlEQVR4nO3c7XKiMBSAYYIa9VAVxC+0tnv/V7ltqbNVclx3oJySfZ+/pR3eCWDA0CQBAAAAAAAAAAAAAAAAAAAAAADomaT+TSrW+/FdfFLMVvN5Xm6y1HpfvkNWnabu06IcRzeOkubuq8nBW+9St6RauBuzqBKlmtwGOnccW+9Wh6Qxgu/KeEYxO4UCndvEcrmRTTjQrWMZxGyuFLptJINYaYHuFMcgyrNaeI5jbuNztdBZ71s3sr1eGMeJmO30whcKB8Gv9cKN9c51Ij3qhVEMYSKFGriL4/MwkalWOIvj8/DOB+Kr9a51RZTAPJKD9O1aUwYDJ9b71SEfvLuIY0LzKQ18JhbRHKMfxre3+dE9bEuy4upZzWoU0yFaE1lebjLO+Sa2AayJl82yfH6pUh/fAF6IpBJvHQAMinyw3otvIt4n1WZ7OBw2r1Xi0x+yKEDSIHlkq6stsqo47SaXZwbT8+5Ubv0PmD9I+RR0uN615+BG2z9/Jiv2gQcik3xrvipgrNzjXz+mGYUf51w2EnkKfJFcWxTG4zhWHkXdFIYDnuqNfKH2vdttTefy7QtFVvf63h0zo7p3rQulOv8t0Lm1YWLbwnSrPnH9amd3LrYslMcCndubPWBuV+iVHwTkVgdqu8Jfd76du3UwOlBbFZazxwPdxOg4bVV4fPAk/PyTNh+LrQr/zWQUe+FlChRx4SL6Qpvve3otPFpca3otPFsszO210GQlWb+FhcGJ2FHhdJ2Xy2I5W93f0OJE7KRw/5JlPhWR1I8PdxYDur3B9LuDwkmRfTn4JAuvfag3HWThubo5uby+0GpqMHFrXThNGlePTL/lMLiFal1YBKZioj66MbiYti0MvrUg6qlY9j81bVsYPuzUBYEG6wFbFp7DF0f1NQ6D5XItC4/hMVFWyzm3GtwYatdG7WWj+eDGUNvhTNneYFLTrlC9HRorvzC4QvX7CO01h93QClfqUarMvwdXqFxK3wqVFzkWQytUP8DDK48HWKg+AfXKt6aDK1SnmdEULrVbBQp7RGGNwgYKe0RhjcIGCntEYY3CBgp7RGGNwgYKe0RhjcIGCntEYY3CBgp7RGGNwgYKe0RhjcIGCntEYe3/LXweQKFfzUPW18uVR6fwVur/qU2f1sHfyA1eX/Nht+vvH9rqizT8C5H8y1AAAAAAAAAAAAAAAAAAAAAAAPDz/QbkZkUj4AARIwAAAABJRU5ErkJggg==" className = "rounded-full h-10 w-10"></img></div>
            </div>
          {/* Menu top */}
            <div className ="h-[50%] w-[100%] ">
              <img src = "https://coffeecafe.42web.io/cafe%20image/image%201.jpg"
              alt = "image" className = "h-120 w-[100%]" /> 

              <div className = "grid grid-col-4 gap-2 absolute top-40 border-b-1 border-gray-500 w-[100%]">
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
                <div >
                  <img 
                    src = "https://www.kindpng.com/picc/m/478-4788427_shopping-cart-button-shopping-cart-logo-white-hd.png" alt="cart"
                   className = "rounded-[300px]  h-15 w-15 -mt-10  ml-190 cursor-pointer"
                  >
                  </img>
                </div>
                <div className = " border-1 border-white font-bold text-[20px] text-white w-40 h-10 rounded-[5px] pl-2 pt-1 -mt-13 ml-210 mr-20 hover:bg-white hover:text-black cursor-pointer">
                  <button >RESERVATION</button>
                </div>
                </div>
              </div>  
              <div className = "absolute  top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center ">
               
              </div>
            </div>
    </div>
}

