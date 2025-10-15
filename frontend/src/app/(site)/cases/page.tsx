import MainSubheading from '@/shared/ui/MainSubheading/MainSubheading'
import Layout from '../layouts/Layout'
import Footer from '@/widgets/Footer'
import styles from './CasesPage.module.scss'
import { CASES } from '@/shared/data/case'
import CaseItem from '@/shared/ui/CaseItem/CaseItem'
import LinkBack from '@/shared/ui/LinkBack/LinkBack'

export default function Cases() {
    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <LinkBack />
                        <MainSubheading text={'Кейсы'} />
                    </div>
                    <div className={styles.cases_group}>
                        {CASES.map((item) => (
                            <CaseItem
                                key={item.id}
                                description={item.description}
                                title={item.title}
                                miniIcon={item.miniIcon}
                                image={item.image}
                                link={item.url}
                                descriptionText={item.descriptionText}
                            />
                        ))}
                    </div>
                </div>
            </Layout>
            <Footer />
        </>
    )
}
