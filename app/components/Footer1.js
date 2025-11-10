// import {} from "lucide-react";
export  default function Footer1() {
    return <div>
            <div className = " absolute mt-80 h-80 w-[100%] bg-[#121818] flex flex-row">
              <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=640&q=75"
              className = " mt-10 h-70 w-40"
              ></img>
              <img src = "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
              className = "h-13 w-25 mt-50 -ml-10"
              ></img>
            </div>
              <div className = " absolute h-[80%] w-[90%] bg-[#1C1C1C] grid grid-cols-4  ml-15 dark:bg-gradient-to-r from-[#D4D4D4] to-[#909090]">
              {/* about us */}
              <div className = " md:ml-10 mt-20 border-r-2 border-gray-600 pr-10 mb-20 ">
                <div className = "font-bold text-[30px] text-white dark:text-black">About Us</div>
                <div className = "text-white text-[17px] mt-5 dark:text-black">Welcome to  your neighborhood spot for great coffee, homemade treats, and good company.</div>
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
                <div className = "font-bold text-[30px] text-white ml-20 mt-20 mb-10 flex flex-col dark:text-black">Explore</div>
                <div className = "text-white text-[17px] ml-20 mb-5 -mt-5 cursor-pointer hover:text-yellow-400 dark:text-black">Company Profile</div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400 dark:text-black">About </div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400 dark:text-black">Help Center</div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400 dark:text-black">Career</div>
                <div className = "text-white text-[17px] ml-20 mb-5 cursor-pointer hover:text-yellow-400 dark:text-black">Features</div>
              </div>
            {/*Contact info*/}
            <div>
              <div className = "font-bold text-[30px] text-white ml-0 mt-20 mb-10 flex flex-col dark:text-black">Contact Info</div>
                <div className = "text-white text-[17px] mb-5 -mt-5 w-70 dark:text-black">1234 - Bandit Tringi St, Sonipat, Haryana</div>
                <div className = "text-white text-[17px] mb-5 dark:text-black">Phone: +91 1234567890</div>
                <div className = "text-white text-[17px] mb-5 dark:text-black">Email: food@restan.com </div>
            </div>
            {/* Newsletter */}
            <div >
                <div className = "font-bold text-[30px] text-white  mt-20 mb-10 flex flex-col dark:text-black">Newsletter</div>
                <div className = "text-white text-[17px]  mb-5 -mt-5 mr-5 dark:text-black">Join our subscribers list to get the latest news and special offers. </div>
                <input type = "email" placeholder="Your Email Address" className = "text-white w-60 h-10 mt-5 -ml-5 rounded-[5px] pl-2 border-b-1 border-b-gray-300 text-[16px] dark:text-black ">
                </input>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                 width="30" 
                 height="30"
                  viewBox="0 0 24 24"
                   fill="none" 
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" cursor-pointer lucide lucide-chevron-right-icon lucide-chevron-right ml-55 -mt-10 text-white"><path d="m9 18 6-6-6-6"/></svg>
            </div>
            </div>
    </div>
}