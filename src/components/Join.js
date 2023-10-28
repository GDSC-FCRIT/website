function Join(){
    return(
        <div className="bg-[#EEEEEE] bg-join-bg rounded-3xl p-1 m-10 shadow-md	max-md:m-3">
            <div className="flex  backdrop-blur-sm rounded-3xl max-md:flex-col-reverse">
                <div className="min-w-[28%] max-md:min-w-[100%] pl-12 pt-12 max-md:pl-2 max-md:text-center">
                    <h1 className="text-6xl font-extrabold max-md:text-5xl"> Join Us</h1><br/>
                    <p className="text-3xl font-bold max-md:text-2xl">
                    Collaborate.<br/>
                    Create.<br/>
                    Learn.<br/>
                    Grow.<br/>
                    </p><br/>
                    <a href=""> <button className="bg-[#78808E] text-[#FFFFFF] rounded-full p-3 shadow-lg min-w-full max-md:min-w-[80%]">
                        <p className="text-2xl font-extrabold">JOIN</p></button></a>
                </div>
                <div>
                    <img src="/joinUsYt.png" alt="joinUs" style={{ width: '100%', transform: 'scale(0.9)' }} />
                </div>
            </div>
        </div>
    )
}
export default Join;