import Image from "next/image";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <div className="logo-image">
                    <Image
                        src="/img/logo.svg"
                        alt="this is logo"
                        width={48.16}
                        height={55.37}
                    />
                </div>
                <div className="logo-title">
                    Cache
                </div>
            </div>

            <div className="nav-items">
                <div className="nav-item stake">
                    <Image
                        src="/img/dollar-coin-stack.svg"
                        alt="this is dollar-coin-stack"
                        width={18}
                        height={18}
                    />
                    <span>Stake</span>
                </div>
                <div className="nav-item marketplace">
                    <Image
                        src="/img/marketplace.svg"
                        alt="this is dollar-coin-stack"
                        width={18}
                        height={18}
                    />
                    <span>Marketplace</span>
                </div>
                <div className="nav-item dashboard">
                    <Image
                        src="/img/dashboard.svg"
                        alt="this is dollar-coin-stack"
                        width={18}
                        height={18}
                    />
                    <span>Dashboard</span>
                </div>
                <div className="nav-item cachecompute">
                    <Image
                        src="/img/globe.svg"
                        alt="this is dollar-coin-stack"
                        width={18}
                        height={18}
                    />
                    <span>CacheCompute</span>
                </div>
            </div>

            <div className="nav-footer">
                <div className="price">
                    <span>$Cache Price:</span>
                    <span>+74%</span>
                </div>

                <div className="contact">
                    <Image
                        src="img/x.svg"
                        alt="this is x"
                        width={22}
                        height={23}
                    />
                    <Image
                        src="img/fa book.svg"
                        alt="this is book"
                        width={42}
                        height={30}
                    />
                    <Image
                        src="img/telegram.svg"
                        alt="this is telegram"
                        width={26}
                        height={23}
                    />
                </div>
            </div>

        </div>
    )
}

export default Navigation;