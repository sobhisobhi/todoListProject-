import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

const Logout = () => {
    useEffect(() => {
        return () => {
            //history.push("/login");
        };
    }, []);
    const [loading, setLoading] = useState(true);

    return (
        <React.Fragment>
            <div>
                {loading ? (
                    <div
                        style={{
                            /* position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(10px)" */
                            margin: "auto",
                            display: "flex",
                            position: "absolute",
                            top: "calc(50% - 50px)",
                            left: "calc(50% - 50px)",
                        }}
                    >
                        <Loader
                            /* color="#0000FF"
                            secondaryColor="#496e9c"
                            type="MutatingDots"
                            width={100}
                            height={100} */
                            color="#00BFFF"
                            type="Rings"
                            height={200}
                            width={200}
                            timeout={3000}
                        />
                    </div>
                ) : (
                    setLoading(true)
                )}
                ;
            </div>
        </React.Fragment>
    );
};

export default Logout;
