// описание параметров

currentRating={rating}     - текуший рейтинг
maxRating={10}             - максимальное число рейтинга
ImageW={30}                - ширина звезды рейтинга
ImageH={30}                - высота звезды рейтинга
addNumberRating={true}     - отображение рейтинга ввиде цифр 
addStarsRating={true}      - отображение рейтинга ввиде звезд
colorStarRating={"orange"} - цвет звезд
colorRange={{              - цветовой диапозон реагирования на рейтинг
medium: 4.0,               - минимальное число среднего рейтинга
height: 7.0                - минимальное число высокого рейтинга
}}
isBorder                   - отображение границ

//Типы данных и структура

currentRating={rating}     - число дробное (0.0)  
maxRating={10}             - число целое
ImageW={30}                - число целое
ImageH={30}                - число целое
addNumberRating={true}     - boolean
addStarsRating={true}      - boolean
colorStarRating={"orange"} - строка
colorRange={{              - объект обязательно с двумя полями (medium, height)
medium: 4.0,               - число дробное (0.0)
height: 7.0                - число дробное (0.0)
}}
isBorder                   - boolean