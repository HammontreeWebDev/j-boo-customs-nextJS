import React from "react";
import useNavigation from "../utils/navigationUtils";

// import components
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Jesse from "@/components/Jesse";

// Jesse"s Story Page | route = /jesses_story
const JessesStory = () => {
    // ! keep track of state using helper function to fire exit animations
    const { isPageChanging, handleNavigate } = useNavigation();

    return (
        <>
            <Header headerImgId="story-header" backgroundImage={"/img/story_header.webp"} isPageChanging={isPageChanging} handleNavigate={handleNavigate} />
            <PageTitle isPageChanging={isPageChanging} whiteText="Jesse&apos;s" greenText="Story" />
            <main>
                <section className="row">
                    <Jesse isPageChanging={isPageChanging} whiteTitle="Jesse Brown -" blueTitle="&quot;J-Boo&quot;" src={"/img/Jesse-Avatar.webp"} alt="placeholder image for jesse"
                        text={
                            <>
                                Jesse Ryder Brown was special in every way possible, from the moment of conception to the day he passed. He made enormous impacts on everyone around him. Betsy, Jesse&apos;s mother, struggled with infertility for years. Jesse&apos;s parents were told they would never have children, so they moved on with life, not knowing what immense amounts of love lay ahead. After 10 years of waiting, Betsy and Brad were overjoyed to find out they were expecting a beautiful baby boy. He was born on Halloween in 2011. He was the most beautiful child you ever saw. He was indeed a miracle child. And so he was named &quot;Jesse,&quot; meaning &quot;gift from God,&quot; and that he was.
                                <br></br>
                                <br></br>
                                From the moment he was born he filled all our family member&apos;s hearts with love and joy. His little laugh would fill a room. His sparkling blue eyes never stopped twinkling. He loved anything and everything that had wheels on it. He loved to swim, he loved his dogs, and boy did he love his family. His middle name, Ryder, destined him to live life on wheels. He started racing in BMX at the Orlando BMX track when he was just three years old. You could not get him off the track. He would beg and plead to keep racing. We would question how he had so much energy to keep racing in that tiny little body. He was raised at that track, where he joined a whole new community, one that would come to love him just as much as his family.
                                <br></br>
                                <br></br>
                                Jesse made so many friends, and all the parents at the track would have taken him home any second they got. They knew what a down-to-earth, respectful, and caring child Jesse was. Down to his core, he was compassionate. You can&apos;t teach that at such a young age. He was truly an angel born on Earth. He would give his trophies and ribbons to the other kids when they didn&apos;t get any. What kind of kid does that? Jesse did. We are forever grateful for his first track family and mentors. He accomplished Rider of the Month (2015), multiple State and Regional Championships, and even won one National race, against riders all over the country.
                                <br></br>
                                <br></br>
                                Jesse had many communities surrounding him with love and one of those communities was their neighborhood family. Jesse grew up with many kids in his neighborhood. They would play in the street every night whether that be playing basketball, riding bikes, playing hide and seek, you name it. Jesse was the first kid out there every night asking his friends if they could play. It&apos;s something you don&apos;t see too much of anymore. In the era of smart phones, computers, and video games, Jesse wanted to be outside.
                                <br></br>
                                <br></br>
                                At his school, Lakemonte Elementary, Jesse was everyone&apos;s friend and loved to play sports outside. Jesse was a safety officer and walked all the little kindergarteners to their classrooms in the mornings. He flew through his work in school, always on the Honor Roll, always trying to get done as quickly as possible to go back outside. After his passing, we heard so many amazing stories about Jesse from his friends and teachers at school. It warms our hearts to know what a great friend he was, how respectful he was to everyone, and how he was always willing to lend a helping hand to anyone who needed it. As a testament to his amazing qualities, the school has dedicated an award to the fifth grade class, called &quot;The Jesse Brown Award&quot;. This award is to be given to the student who is kind hearted, adventurous, and a friend to everyone. What an honor.
                                <br></br>
                                <br></br>
                                Jesse also trained in Muay Thai. Coach Rob was such a great teacher and mentor to Jesse. Jesse was the only kid who still showed up to class during the pandemic and by his third year they moved him to the adult class because he was too strong for the kids his age. When Jesse was nine years old, he decided he wanted to go FAST. He was sick of pedaling and it was time for a motor and a clutch. His parents got him his first dirt bike, a little orange KTM 65, and for Jesse, life was complete. He began racing in the Florida Trail Riding series. It wasn&apos;t long before Jesse was ready for a bigger bike. He loved to trail ride because that&apos;s what his father, Brad, grew up doing, but his heart was for the MX track. He loved his MX track friends and family, supporting him and cheering him on during every race. His biggest accomplishment in MX was winning the I-4 MX Triple Crown 1st Place prize at Spyder MX. He absolutely crushed his competition on that day. Jesse was the light of our lives. We will never forget him, or the humongous hole that has been left in our family&apos;s hearts. His legacy will live on.
                            </>
                        } />
                </section>
            </main>
        </>
    )
};

export default JessesStory;