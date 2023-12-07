const WindowRegions = () => {

    return <div className="window_container">
        <div className="blackout"></div>
        <div className="window_section">
            <div className="window_section_header">
                <h3>Выберите ваш регион</h3>
                <div className="close">
                    <div className="line l1"></div>
                    <div className="line l2"></div>
                </div>
            </div>
            <div className="list_regions">
                <div className="item but">Москва</div>
                <div className="item but">Санкт-Петербург</div>
                <div className="item but">Казань</div>
                <div className="item but">Москва</div>
                <div className="item but">Москва</div>
                <div className="item but">Москва</div>
                <div className="item but">Москва</div>
                <div className="item but">Москва</div>
                <div className="item but">Москва</div>
                <div className="item but">Москва</div>
            </div>
        </div>
    </div>
}

export default WindowRegions