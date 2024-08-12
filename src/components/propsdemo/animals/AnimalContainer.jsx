import Animal from "./Animal";

const AnimalContainer = () => {
    let animals = [
        { name: "Tiger", count: 500, isEndangered: true, photo: 'https://picsum.photos/200/300' },
        { name: "Brown Bear", count: 1500, isEndangered: false, photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100' },
        { name: "Panda", count: 200, isEndangered: true, photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100' }
    ];

    return (
        <>
            <Animal list={animals}>
                <h1>Endangered Animals</h1>
            </Animal>
        </>
    );
}

export default AnimalContainer;
