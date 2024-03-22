import React from "react";

function Stack() {
    const iconClass = "w-16 h-16 bg-stone-300 bg-opacity-30 rounded-md p-4"
    return (
        <div className="flex flex-col p-8 mx-auto">
            <p className="font-semibold text-xl md:text-2xl">Technologies and Languages i know</p>
            <p className="text-base md:text-lg">Ummm... Let me see...</p>
            <div className="flex flex-wrap items-center justify-center gap-4 p-8">
                <img alt="Android" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/android/android-original.svg"/>
                <img alt="Android Studio" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/androidstudio/androidstudio-original.svg"/>
                <img alt="Jetpack Compose" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jetpackcompose/jetpackcompose-original.svg"/>
                <img alt="Kotlin" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/kotlin/kotlin-original.svg"/>  
                <img alt="Java" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-original.svg"/>
                <img alt="Git" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original.svg"/>
                <img alt="Github" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg"/>
                <img alt="Gradle" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/gradle/gradle-original.svg"/>
                <img alt="php" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/php/php-original.svg"/>
                <img alt="Laravel" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/laravel/laravel-original.svg"/>
                <img alt="Linux" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/linux/linux-original.svg"/>
                <img alt="MongoDB" className={iconClass} src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original.svg"/>
            </div>
        </div>
    )
}

export default Stack;