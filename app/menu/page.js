export default function Register() {
  return  <div className ="bg-white">
            <div className = "h-[40%] w-[100%] bg-gray-500 rounded-[10px] flex flex-row">
                <div className = "text-white font-bold text-[20px] pl-10 pt-3">envato</div> 
                <button className = " bg-lime-500 font-bold text-[15px] text-white w-25 h-10 rounded-[10px] mt-2 mb-2 ml-310 hover:bg-lime-600">Buy</button>
            </div>
          {/* socials */}
            <div className = "h-15 w-[100%] bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-500 flex flex-row">
              <div className = "text-white  text-[17px] pl-15 pt-4">Phone: 123456789</div>
              <div className = "text-white  text-[17px] ml-30 pt-4 font-bold">Email: </div><div className = "text-white text-[17px] ml-2 pt-4">food@restan.com</div>
              <div className = "ml-110 mt-2 h-10 w-10"><img src = "https://t3.ftcdn.net/jpg/08/16/25/90/360_F_816259007_nf2D0WfuuMYXzQGxdFnWOQuB9bUCakYI.jpg" className ="h-10 w-10 rounded-full"></img></div>
              <div className = "flex flex-row-reverse mr-10 pt-2.5">
              <div className="">
                <select className="h-8 w-25 appearance-none ml-4   border-1 border-amber-500 text-center text-black font-bold rounded-md bg-white">
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

              <div className = "grid grid-col-4 gap-2 absolute top-40 border-b-1 border-gray-500">
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
                <div className = " border-1 border-white font-bold text-[20px] text-white w-40 h-10 rounded-[5px] pl-2 pt-1 -mt-13 ml-230 mr-20 hover:bg-white hover:text-black cursor-pointer">
                  <button >RESERVATION</button>
                </div>
                </div>
              </div>  
              <div className = "absolute  top-120 left-140 font-semibold font-serif text-white text-[50px] flex justify-center items-center ">
                Food Menu
              </div>
            </div>
          {/*meun Main*/}
           {/*Breakfast Menu*/}
           <div className = "grid grid-cols-2 flex flex-row">
              <div className = "h-150 w-150 mt-20 ml-15">
                  <div className = "flex flex-col">
                    <div className = "mt-10 ml-115 h-50 w-50  bg-[#BA9368] absolute border-1 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                      <div className = "text-[#EEE6A7] font-bold font-serif pt-11 pl-12 text-[35px] ">Menu</div>
                      <div className = "font-bold text-[20px] ml-11 text-white font-serif">BreakFast</div>
                    </div>
                  </div>
                  <img src = "https://media.istockphoto.com/id/839554548/photo/healthy-full-american-breakfast.jpg?s=612x612&w=0&k=20&c=iQVE5Tv1KOfaY9GWJnXbECUPIKb_Lbq3keQ3z-D_evI="
                      alt = "breakfast" 
                        className = "h-140 w-140 rounded-[10px] static"
                  ></img>
              </div>
              <div className = "flex flex-col -mt-15">
                <div className = "flex flex-row"><div className ="border-1 border-gray-600 h-10 w-15 pl-3 pt-1.5 text-gray-600 font-bold ml-133 mt-30">Half</div>
                <div className ="border-1 border-gray-600 h-10 w-15 ml-7 pl-3 pt-1.5 text-gray-600 font-bold mt-30">Full</div></div>
                <div className = "flex flex-row">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7rHkNjZ7vrO0py4OFRoG9i62h0An8qgiixZ5Dp6JZA&s"
                    className ="h-40 w-40 rounded-full mt-3 ml-10"
                  ></img>
                  <div>
                    <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 flex flex-row"><div>Chicken Alfredo</div><div className ="ml-39 text-[#BA9368] tracking-wide text-[25px]">$20 || $40</div></div> 
                    <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 flex flex-row "><div>Ricotta / goat cheese / beetroot</div><div className = "ml-25">Free drinks</div></div> 
                  </div>
                </div>
                <div className = "flex flex-row">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6KFuTF7KOB8iK5-dr00yJ-HWEM3sVOK7jQ&s"
                    className ="h-40 w-40 rounded-full mt-3 ml-10"
                  ></img>
                  <div>
                    <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 flex flex-row"><div>Fish & Chips</div><div className ="ml-47 text-[#BA9368] tracking-wide text-[25px]">$36 || $70</div></div> 
                    <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 flex flex-row "><div>Atlantic / chips / salad / tartare</div><div className = "ml-25">Free drinks</div></div> 
                  </div>
                </div>
                <div className = "flex flex-row">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6KFuTF7KOB8iK5-dr00yJ-HWEM3sVOK7jQ&s"
                    className ="h-40 w-40 rounded-full mt-3 ml-10"
                  ></img>
                  <div>
                    <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 flex flex-row"><div>Ebony Fillet Steak</div><div className ="ml-35 text-[#BA9368] tracking-wide text-[25px]">$20 || $40</div></div> 
                    <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 flex flex-row "><div>Truffle mash / pepper sauce</div><div className = "ml-30">Free drinks</div></div> 
                  </div>
                </div>
              </div>
           </div>
           {/*Lunch Menu*/}
           <div className = "grid grid-cols-2 flex flex-row">
              <div className = "h-150 w-150 mt-20 ml-200">
                  <div className = "flex flex-col">
                    <div className = "mt-10 ml-115 h-50 w-50  bg-[#BA9368] absolute border-1 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                      <div className = "text-[#EEE6A7] font-bold font-serif pt-11 pl-12 text-[35px] ">Menu</div>
                      <div className = "font-bold text-[20px] ml-14 text-white font-serif">Desserts</div>
                    </div>
                  </div>
                  <img src = "https://media.istockphoto.com/id/623709028/photo/table-with-various-cookies-tarts-cakes-cupcakes-and-cakepops.jpg?s=612x612&w=0&k=20&c=NX-Ld03_GDHO77WjzzrUacReuoaXHajIXPsjdxgJDG8="
                      alt = "dessert" 
                        className = "h-140 w-140 rounded-[10px] static"
                  ></img>
              </div>
              <div className = "flex flex-col -mt-15 -ml-180">
                <div className = "flex flex-row"><div className ="border-1 border-gray-600 h-10 w-15 pl-3 pt-1.5 text-gray-600 font-bold ml-133 mt-30">Half</div>
                <div className ="border-1 border-gray-600 h-10 w-15 ml-7 pl-3 pt-1.5 text-gray-600 font-bold mt-30">Full</div></div>
                <div className = "flex flex-row">
                  <img src = "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?fit=1080%2C1080&ssl=1"
                    className ="h-40 w-40 rounded-full mt-3 ml-10"
                  ></img>
                  <div>
                    <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 flex flex-row"><div>Brownies</div><div className ="ml-55 text-[#BA9368] tracking-wide text-[25px]">$20 || $40</div></div> 
                    <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 flex flex-row "><div>Ricotta / goat cheese / beetroot</div><div className = "ml-25">Free drinks</div></div> 
                  </div>
                </div>
                <div className = "flex flex-row">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQ-gXQulM-Tha8O4EA-h0plyh1Di5JtMjJw&s"
                    className ="h-40 w-40 rounded-full mt-3 ml-10"
                  ></img>
                  <div>
                    <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 flex flex-row"><div>Cheese Cake</div><div className ="ml-47 text-[#BA9368] tracking-wide text-[25px]">$36 || $70</div></div> 
                    <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 flex flex-row "><div>Atlantic / chips / salad / tartare</div><div className = "ml-25">Free drinks</div></div> 
                  </div>
                </div>
                <div className = "flex flex-row">
                  <img src = "https://rogersfoods.com/wp-content/uploads/2021/04/classic-bran-muffins.jpg"
                    className ="h-40 w-40 rounded-full mt-3 ml-10"
                  ></img>
                  <div>
                    <div className = "font-bold text-[20px] ml-5 text-black font-serif mt-8 flex flex-row"><div>Muffins</div><div className ="ml-5 text-[#BA9368] tracking-wide text-[25px]">$20 || $40</div></div> 
                    <div className = "font-bold text-[15px] ml-5 text-gray-500 font-serif mt-3 flex flex-row "><div>Truffle mash / pepper sauce</div><div className = "ml-30">Free drinks</div></div> 
                  </div>
                </div>
              </div>
           </div>
           {/*Dinner Menu*/}
          {/*menu bottom*/}
            <div className = "h-[100%] w-[90%] bg-[#1C1C1C] grid grid-cols-4 mt-5 ml-15">
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
          
        </div>
}